// src/pages/AccessibilityPage.jsx
import AccessibilityHero from "../components/AccessibilityHero";
import AccessibilityControls from "../components/AccessibilityControls";
import AccessibilityFeatures from "../components/AccessibilityFeatures";
import AccessibilityPreferences from "../components/AccessibilityPreferences";
import AccessibilityDemo from "../components/AccessibilityDemo";

const AccessibilityPage = () => {
  return (
    <div className="accessibility-page">
      <AccessibilityHero />
      <AccessibilityControls />
      <AccessibilityDemo />
      <AccessibilityFeatures />
      {/* <AccessibilityPreferences /> */}
    </div>
  );
};

export default AccessibilityPage;
