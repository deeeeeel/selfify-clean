'use client';

import { useParams } from 'next/navigation';
import SelfieChatUI from '@/components/chat/SelfieChatUI';

export default function DeepTalkSlugPage() {
  const { slug } = useParams();

  return (
    <div className="max-w-[360px] mx-auto">
      <SelfieChatUI topic={slug} />
    </div>
  );
}
