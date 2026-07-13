import React, { useEffect, useState } from 'react';
import './ArchiveSlider.css';

interface ArchiveItem {
  title: string;
  date: string;
}

const items: ArchiveItem[] = [
  {
    title: '金融機関の友人100人に銀行融資について教わってきました',
    date: '2022年7月12日 開催',
  },
  {
    title: '創業期に知っておきたい資金調達の基本',
    date: '2022年9月8日 開催',
  },
  {
    title: '決算書の見られ方と融資審査のポイント',
    date: '2022年11月15日 開催',
  },
  {
    title: '補助金・助成金を活用した事業成長戦略',
    date: '2023年2月21日 開催',
  },
  {
    title: '金融機関と良い関係を築くための決算対策',
    date: '2023年5月17日 開催',
  },
];

const SLIDE_INTERVAL = 3500;

const ArchiveSlider: React.FC = () => {
  // 先頭に末尾のクローンを追加し、右方向へスライドさせる（実アイテムは index 1 開始）
  const [index, setIndex] = useState(1);
  const [enableTransition, setEnableTransition] = useState(true);

  // 一定間隔で前のスライドへ自動送り（右方向へスライド）
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev - 1);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  // 先頭のクローン（末尾の複製）まで進んだら、トランジションなしで実末尾に戻す
  const handleTransitionEnd = () => {
    if (index === 0) {
      setEnableTransition(false);
      setIndex(items.length);
    }
  };

  // トランジション無効化で瞬間移動した直後、再度有効化して次回の送りに備える
  useEffect(() => {
    if (!enableTransition) {
      const raf = requestAnimationFrame(() => setEnableTransition(true));
      return () => cancelAnimationFrame(raf);
    }
  }, [enableTransition]);

  const slides = [items[items.length - 1], ...items];

  return (
    <div className="archive-slider">
      <div
        className="archive-slider__track"
        style={{
          transform: `translateX(-${index * 100}%)`,
          transition: enableTransition ? 'transform 0.8s cubic-bezier(0.65, 0, 0.35, 1)' : 'none',
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {slides.map((item, i) => (
          <div className="archive-slider__slide" key={i} aria-hidden={i !== index}>
            <p className="archive-title">{item.title}</p>
            <div className="archive-meta">
              <span className="archive-date">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArchiveSlider;
