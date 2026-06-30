import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'story', label: 'Story' },
    { id: 'policy', label: 'Policy' },
    { id: 'about', label: 'About' },
    { id: 'media', label: 'Media' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <a href="#hero" className="nav-logo" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
          O&deg;
        </a>
        <div className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(link.id);
            }}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div
          className="hero-image"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/Gemini_Generated_Image_pocvq6pocvq6pocv.png)` }}
        ></div>
        <div className="hero-wordmark">Olion</div>
      </section>

      {/* Story Section */}
      <section id="story" className="story">
        <h2>Story</h2>
        <h3>
          近くのことに、<br />
          そっと耳を傾ける。
        </h3>
        <div className="story-content">
          <p>
            仕事柄、幅広く相談を受けることが多い私。つい手を広げてしまいそうになるけれど、大切なのは私の手の届く範囲の物事を大切にすること。
          </p>
          <p>
            今、目の前にいる人たちを、少しでも明るい未来と最適な道に導くために、無理な事はせず、分からないことは誰かと協力して解決していく。
          </p>
          <p>
            周りには頼れる強い味方がいるからこそ、どんな相談に対しても真摯に向き合える。いつでも、なんでも聞ける身近な相談相手である為に、常に真っ直ぐであり続ける。
          </p>
        </div>
      </section>

      {/* Policy Section */}
      <section id="policy" className="policy">
        <h2>Policy</h2>
        <div className="policy-grid">
          <div
            className="policy-image"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/Gemini_Generated_Image_j9cm12j9cm12j9cm.png)` }}
          ></div>
          <div>
            <div className="policy-item">
              <span className="policy-num">01.</span>
              <div>
                <h3>現場を自分の目で確かめる。</h3>
                <p>
                  上辺だけの仕事をしたくないから、自分の足でお客様一人一人に会いに行くことを大切にしています。常にお客様ファーストで、全力で向き合っていきます。
                </p>
              </div>
            </div>
            <div className="policy-item">
              <span className="policy-num">02.</span>
              <div>
                <h3>頼りになる人がすぐそばに。</h3>
                <p>
                  手の届く範囲の仕事をしているけど、相談がその範囲を超えることもあります。頼りになるビジネスパートナーが周りにいるから、いつもお客様に真摯でいられます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-header">
          <h2>About</h2>
          <div
            className="about-hero-image"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/Gemini_Generated_Image_ktqan4ktqan4ktqa.png)` }}
          >
            <div className="about-hero-text">
              <h3>身近な相談相手を目指して。</h3>
              <p>
                お客様にとってのもっとも身近な相談相手を目指し、幅広いご相談を一緒に解決したいという思いで日々精進しております。
              </p>
            </div>
          </div>
        </div>

        <div className="about-content">
          {/* Greeting */}
          <div className="greeting">
            <div></div>
            <div className="greeting-text">
              <h3>ご挨拶</h3>
              <p>
                学生時代から簿記の成績は良く、軽い気持ちで志した税理士。始まりは会計事務所のアルバイトから。当時は知識がなく相談を断ることもありましたが、融資について猛勉強し、金融機関に直接連絡をとり一次情報をベースにノウハウを蓄積。気づけば金融機関も私のサポートをしてくれるように。幅広いご相談を一緒に解決したいという思いで日々活動しております。
              </p>
            </div>
          </div>

          {/* Profile */}
          <div className="profile">
            <div
              className="profile-image"
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/Gemini_Generated_Image_ed012sed012sed01.png)` }}
            ></div>
            <div className="profile-content">
              <div className="profile-label">Profile</div>
              <h3>岩田 まり子</h3>
              <p>
                迅速な行動力と「餅は餅屋」と割り切る性格が支持され、これまでに100件以上のクライアントを担当。決算書の見せ方までも考え、銀行・信用金庫・政府系金融機関など150人以上の金融機関の友人を得る。企業と金融機関双方のWIN-WINな関係性を築き上げる手法は、双方から厚い信頼を獲得している。
              </p>
            </div>
          </div>

          {/* Carrier */}
          <div className="carrier">
            <div className="carrier-label">Carrier</div>
            <div className="carrier-list">
              <div className="carrier-item">
                <span className="date">2005年9月</span>
                <span className="content">ハマベ会計事務所 入所</span>
              </div>
              <div className="carrier-item">
                <span className="date">2019年6月</span>
                <span className="content">ライオン橋税理士法人設立 同役員就任</span>
              </div>
              <div className="carrier-item">
                <span className="date">2020年2月</span>
                <span className="content">著書「金融機関の友人100人に銀行融資について教わってきました」出版</span>
              </div>
              <div className="carrier-item">
                <span className="date">2021年3月</span>
                <span className="content">税理士事務所O'lion 設置</span>
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="company">
            <div className="company-label">Company</div>
            <div className="company-list">
              <div className="company-item">
                <span className="label">会社名</span>
                <span className="value">税理士事務所O'lion</span>
              </div>
              <div className="company-item">
                <span className="label">代表者名</span>
                <span className="value">岩田まり子</span>
              </div>
              <div className="company-item">
                <span className="label">事業内容</span>
                <span className="value">税理士業</span>
              </div>
              <div className="company-item">
                <span className="label">連絡先</span>
                <span className="value">iwata@lion-tax.jp</span>
              </div>
              <div className="company-item">
                <span className="label">住所</span>
                <span className="value">大阪市中央区今橋1丁目7番14号 堺筋北浜宗田ビル702</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section id="media" className="media">
        <h2>Media</h2>
        <div className="media-grid">
          <div
            className="media-image"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/Gemini_Generated_Image_sz8doqsz8doqsz8d.png)` }}
          ></div>
          <div className="media-content">
            <h3>セミナー</h3>
            <p>
              金融機関からの借り入れをよりスムーズかつ有利に進めるためのポイントやノウハウを発信するセミナーを定期的に開催しています。
            </p>
            <div className="archive">
              <div className="archive-label">Archive</div>
              <p className="archive-title">
                金融機関の友人100人に銀行融資について教わってきました
              </p>
              <div className="archive-meta">
                <span className="archive-date">2022年7月12日 開催</span>
                <span className="archive-link" style={{ cursor: 'pointer' }}>view more →</span>
              </div>
            </div>
            <h3>出版</h3>
            <p>
              2020年2月に著書「金融機関の友人100人に『銀行融資』について教わってきました」が出版。金融機関へ根掘り葉掘り聞いた内容を公開し、実際にコミュニケーションする時に役立つ情報としてご紹介しています。
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="contact-inner">
          <h2>Contact</h2>
          <div className="contact-info">
            <span>Mail : iwata@lion-tax.jp</span>
            <span>Tel : 070 3773 5212</span>
          </div>
          <div className="footer">
            <span>M&A</span>
            <span>プライバシーポリシー</span>
            <span>&copy; Olion 2022</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
