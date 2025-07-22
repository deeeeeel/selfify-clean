'use client';

import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { ConfessCardProps } from './ConfessCard';

type CommentModalProps = {
  confessId: number;
  onClose: () => void;
};

export default function CommentModal({ confessId, onClose }: CommentModalProps) {
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;
    console.log({ confessId, comment });
    setComment('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg w-[90%] max-w-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold font-['Trebuchet_MS']">Tambah Komentar</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FaTimes />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Komentar</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={4}
              maxLength={200}
              placeholder="Tulis komentar kamu..."
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
            />
            <div className="text-right text-xs text-gray-500">
              {comment.length}/200
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800"
            >
              Kirim
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

