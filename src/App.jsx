import React, { useState } from 'react';
import { SITE_CONFIG } from './config';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorldUpgraded from './components/WorldUpgraded';
import BookIntro from './components/BookIntro';
import CentralIdea from './components/CentralIdea';
import RefuseToUpgrade from './components/RefuseToUpgrade';
import BookPositioning from './components/BookPositioning';
import WhatIsSalvage from './components/WhatIsSalvage';
import InsideTheBook from './components/InsideTheBook';
import TheRealQuestion from './components/TheRealQuestion';
import WhoIsFor from './components/WhoIsFor';
import AuthorSection from './components/AuthorSection';
import NoteAboutProof from './components/NoteAboutProof';
import WhatYouGet from './components/WhatYouGet';
import NoPerfectParent from './components/NoPerfectParent';
import CostOfWaiting from './components/CostOfWaiting';
import OfferSection from './components/OfferSection';
import TheDecision from './components/TheDecision';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import PurchaseModal from './components/PurchaseModal';
import MobileStickyCTA from './components/MobileStickyCTA';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [price, setPrice] = useState(SITE_CONFIG.DEFAULT_BOOK_PRICE);
  const [currency, setCurrency] = useState(SITE_CONFIG.CURRENCY_SYMBOL);

  const handleOpenBuy = () => {
    // If a direct external purchase URL is set (not #checkout), navigate directly or open modal
    if (SITE_CONFIG.BOOK_PURCHASE_URL && SITE_CONFIG.BOOK_PURCHASE_URL !== '#checkout' && SITE_CONFIG.BOOK_PURCHASE_URL.startsWith('http')) {
      window.open(SITE_CONFIG.BOOK_PURCHASE_URL, '_blank');
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="salvagenda-landing">
      {/* 1. Navbar */}
      <Navbar onBuyClick={handleOpenBuy} />

      {/* 2. Hero Section */}
      <Hero onBuyClick={handleOpenBuy} />

      {/* 3. Section 2 — The World Upgraded */}
      <WorldUpgraded />

      {/* 4. Book Introduction */}
      <BookIntro onBuyClick={handleOpenBuy} />

      {/* 5. The Central Idea */}
      <CentralIdea />

      {/* 6. But What If You Refuse To Upgrade? */}
      <RefuseToUpgrade onBuyClick={handleOpenBuy} />

      {/* 7. Book Positioning Section */}
      <BookPositioning onBuyClick={handleOpenBuy} />

      {/* 8. What Is Salvage Agenda? */}
      <WhatIsSalvage />

      {/* 9. Inside The Book (6 Chapters) */}
      <InsideTheBook onBuyClick={handleOpenBuy} />

      {/* 10. The Real Question */}
      <TheRealQuestion />

      {/* 11. Who This Book Is For */}
      <WhoIsFor onBuyClick={handleOpenBuy} />

      {/* 12. Author Section */}
      <AuthorSection />

      {/* 13. Note About Proof */}
      <NoteAboutProof />

      {/* 14. What You Get */}
      <WhatYouGet onBuyClick={handleOpenBuy} />

      {/* 15. No Perfect Parent Section */}
      <NoPerfectParent />

      {/* 16. The Cost Of Waiting */}
      <CostOfWaiting onBuyClick={handleOpenBuy} />

      {/* 17. Offer / Purchase Section */}
      <OfferSection onBuyClick={handleOpenBuy} price={price} currency={currency} />

      {/* 18. The Decision */}
      <TheDecision />

      {/* 19. Final CTA */}
      <FinalCTA onBuyClick={handleOpenBuy} price={price} currency={currency} />

      {/* 20. Footer */}
      <Footer onBuyClick={handleOpenBuy} />

      {/* 21. Interactive Purchase Modal */}
      <PurchaseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        price={price}
        setPrice={setPrice}
        currency={currency}
        setCurrency={setCurrency}
      />

      {/* 22. Mobile Sticky CTA Bar */}
      <MobileStickyCTA onBuyClick={handleOpenBuy} price={price} currency={currency} />
    </div>
  );
}
