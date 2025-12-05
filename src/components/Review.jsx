import React, { useState, useEffect } from "react";
import {
  User,
  X,
  Star,
  MessageSquare,
  Send,
  ChevronUp,
  ChevronDown,
  CornerDownRight
} from "lucide-react";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
  doc,
  updateDoc,
  increment
} from "firebase/firestore";
import { auth, db } from "../config/firebase"; 

// --- 1. Helper Component: Star Display ---
const StarRating = ({ rating, size = 16, interactive = false, onRate = () => {} }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={!interactive}
          onClick={() => onRate(star)}
          className={`${interactive ? 'cursor-pointer hover:scale-110 transition-transform' : 'cursor-default'}`}
        >
          <Star
            size={size}
            className={`${
              star <= rating 
                ? "fill-yellow-400 text-yellow-400" 
                : "fill-gray-200 text-gray-200"
            }`}
          />
        </button>
      ))}
    </div>
  );
};

// --- 2. Component: Recursive Comment Item ---
const CommentItem = ({ comment, reviewId }) => {
  const [isReplying, setIsReplying] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReply = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) return alert("Please login to reply");
    if (!replyText.trim()) return;

    setLoading(true);
    try {
      // Add reply with parentId
      await addDoc(collection(db, "reviews", reviewId, "comments"), {
        text: replyText,
        userId: user.uid,
        userName: user.displayName || user.email?.split('@')[0] || "User",
        parentId: comment.id, // Link to this comment
        createdAt: serverTimestamp(),
      });

      // Update parent review count
      await updateDoc(doc(db, "reviews", reviewId), {
        reviewsCount: increment(1)
      });

      setReplyText("");
      setIsReplying(false);
    } catch (err) {
      console.error("Error replying:", err);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-2 mt-3">
      {/* Comment Bubble */}
      <div className="flex gap-3">
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-xs border border-blue-200">
          {comment.userName ? comment.userName.charAt(0).toUpperCase() : "U"}
        </div>
        
        <div className="flex-1">
          <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-200 w-fit max-w-full">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-gray-900">{comment.userName}</span>
            </div>
            <p className="text-sm text-gray-600">{comment.text}</p>
          </div>

          {/* Reply Button */}
          <button 
            onClick={() => setIsReplying(!isReplying)}
            className="text-xs text-blue-600 font-semibold mt-1 ml-2 hover:underline"
          >
            Reply
          </button>

          {/* Reply Input */}
          {isReplying && (
            <form onSubmit={handleReply} className="mt-2 flex gap-2 items-center animate-in fade-in slide-in-from-top-1">
              <input 
                autoFocus
                type="text" 
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder={`Reply to ${comment.userName}...`}
                className="flex-1 bg-white border border-gray-300 text-xs rounded-full px-3 py-2 outline-none focus:border-blue-500"
              />
              <button 
                type="submit" 
                disabled={loading}
                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50"
              >
                <Send size={12} />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Render Nested Replies */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="ml-8 pl-3 border-l-2 border-gray-100">
          {comment.replies.map((reply) => (
            <CommentItem key={reply.id} comment={reply} reviewId={reviewId} />
          ))}
        </div>
      )}
    </div>
  );
};

// --- 3. Component: Comments Section Container ---
const ReviewComments = ({ reviewId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const commentsRef = collection(db, "reviews", reviewId, "comments");
    // Order by created time to keep conversation flow
    const q = query(commentsRef, orderBy("createdAt", "asc"));

    const unsub = onSnapshot(q, (snapshot) => {
      const rawData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      // Build the tree structure for nested comments
      setComments(buildCommentTree(rawData));
    });
    return () => unsub();
  }, [reviewId]);

  // Logic to nest comments based on parentId
  const buildCommentTree = (flatComments) => {
    const map = {};
    const roots = [];

    // Initialize map
    flatComments.forEach(c => {
      map[c.id] = { ...c, replies: [] };
    });

    // Link children to parents
    flatComments.forEach(c => {
      if (c.parentId && map[c.parentId]) {
        map[c.parentId].replies.push(map[c.id]);
      } else {
        roots.push(map[c.id]);
      }
    });

    return roots;
  };

  const handleSend = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) return alert("Please login to comment");
    if (!newComment.trim()) return;

    setLoading(true);
    try {
      // Add root comment (parentId is null)
      await addDoc(collection(db, "reviews", reviewId, "comments"), {
        text: newComment,
        userId: user.uid,
        userName: user.displayName || user.email?.split('@')[0] || "User",
        parentId: null, 
        createdAt: serverTimestamp(),
      });

      // Increment review count on the main review document
      await updateDoc(doc(db, "reviews", reviewId), {
        reviewsCount: increment(1)
      });

      setNewComment("");
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="mt-4 md:ml-12 bg-gray-50 rounded-xl border border-gray-200 overflow-hidden shadow-inner animate-in fade-in slide-in-from-top-2 duration-300">
      
      {/* Comments List */}
      <div className="p-4 max-h-96 overflow-y-auto space-y-4 custom-scrollbar">
        {comments.length === 0 ? (
          <p className="text-gray-400 text-xs italic text-center py-4">No comments yet. Be the first!</p>
        ) : (
          comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} reviewId={reviewId} />
          ))
        )}
      </div>

      {/* Main Input Field */}
      <form onSubmit={handleSend} className="p-3 border-t border-gray-200 bg-white flex gap-2 items-center">
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
          <User size={16} />
        </div>
        <input 
          type="text" 
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..." 
          className="flex-1 bg-gray-100 text-sm rounded-full px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-gray-700"
        />
        <button 
          type="submit" 
          disabled={loading}
          className="p-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50 transition-colors shadow-sm"
        >
          <Send size={16} />
        </button>
      </form>
    </div>
  );
};

// --- 4. Component: Individual Review Card ---
const ReviewItem = ({ review, onToggleComments, isCommentsOpen }) => {
  return (
    <div className="border-b border-gray-100 py-6 last:border-0 transition-colors rounded-lg px-4">
      <div className="flex gap-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-md ring-2 ring-blue-50">
            {review.name ? (
               <span className="font-bold text-lg">{review.name.charAt(0).toUpperCase()}</span>
            ) : (
               <User size={24} />
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-bold text-gray-900 text-base">
                {review.name || "Anonymous User"}
              </h4>
              <div className="flex items-center gap-2 mt-1">
                <StarRating rating={review.rating} size={14} />
                <span className="text-xs text-gray-400 font-medium">• {review.date || "Recent"}</span>
              </div>
            </div>
          </div>

          <p className="mt-3 text-gray-600 leading-relaxed text-sm md:text-base">
            {review.text || review.reviewText}
          </p>

          {/* --- TOGGLE BUTTON AREA --- */}
          <div className="mt-3">
            <button
              onClick={() => onToggleComments && onToggleComments(review.id)}
              className="flex items-center gap-2 text-sm font-bold text-blue-600 uppercase tracking-wide hover:text-blue-800 transition-colors py-2"
            >
              <MessageSquare size={18} />
              {isCommentsOpen ? (
                <span>Close Comments</span>
              ) : (
                // Safe check for reviewsCount
                <span>Comments ({review.reviewsCount || 0})</span>
              )}
            </button>
          </div>

          {/* Render Nested Comments Section if Open */}
          {isCommentsOpen && (
             <ReviewComments reviewId={review.id} />
          )}
        </div>
      </div>
    </div>
  );
};

// --- 5. Component: Write Review Modal ---
const ReviewModal = ({ isOpen, onClose, onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) return alert("Login required to write review");
    if (!rating) return alert("Please select a rating");
    
    setLoading(true);
    try {
      await onSubmit({
        userId: user.uid,
        name: user.displayName || user.email?.split('@')[0] || "Anonymous",
        rating,
        text: text.trim(),
        likes: 0,
        reviewsCount: 0, // Initialize count for new reviews
        createdAt: serverTimestamp(),
      });
      setText("");
      setRating(0);
      onClose();
    } catch (error) {
      console.error(error);
      alert("Failed to submit");
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200 border border-gray-100">
        <div className="flex justify-between items-center p-5 border-b border-gray-100 bg-gray-50">
          <h3 className="text-lg font-bold text-gray-800">Write a Review</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-red-500 transition-colors">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="flex flex-col items-center mb-6">
             <label className="text-sm font-medium text-gray-500 mb-2">Tap to Rate</label>
             <StarRating rating={rating} size={32} interactive={true} onRate={setRating} />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Experience</label>
            <textarea
              required
              rows="4"
              className="w-full border border-gray-300 bg-white rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none resize-none placeholder-gray-400"
              placeholder="Tell us what you liked or didn't like..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-lg flex justify-center items-center gap-2 transition-all"
          >
            {loading ? "Posting..." : <>Post Review <Send size={16} /></>}
          </button>
        </form>
      </div>
    </div>
  );
};

// --- 6. Main Page Component ---
const Review1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openCommentFor, setOpenCommentFor] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "reviews"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => {
        const d = doc.data();
        return {
          id: doc.id,
          ...d,
          date: d.createdAt?.toDate ? d.createdAt.toDate().toLocaleDateString() : 'Just now',
        };
      });
      setReviews(data);
    });
    return () => unsub();
  }, []);

  const handleAddReview = async (reviewData) => {
     await addDoc(collection(db, "reviews"), reviewData);
  };

  return (
    <div className="bg-white min-h-screen py-5 -mt-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto bg-white overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-center p-4 border-b border-gray-100 bg-white">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Player Reviews</h2>
            <p className="text-gray-500 text-sm mt-1">{reviews.length} verified ratings</p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)} 
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all hover:shadow-lg"
          >
             Write a Review 
          </button>
        </div>

        <div className="p-4 md:p-8 space-y-2">
          {reviews.length === 0 ? (
             <div className="text-center py-10 text-gray-400">No reviews yet. Be the first!</div>
          ) : (
             reviews.map((review) => (
               <div key={review.id} id={`review-${review.id}`}>
                 <ReviewItem
                   review={review}
                   isCommentsOpen={openCommentFor === review.id}
                   onToggleComments={(id) => {
                     setOpenCommentFor((prev) => (prev === id ? null : id));
                   }}
                 />
               </div>
             ))
          )}
        </div>
      </div>
      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddReview}
      />
    </div>
  );
};

export default Review1;