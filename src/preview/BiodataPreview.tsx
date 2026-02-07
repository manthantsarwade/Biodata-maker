import React from 'react';
import { BiodataProfile, TemplateOption } from '../utils/types';
import TraditionalTemplate from '../templates/TraditionalTemplate';
import ModernTemplate from '../templates/ModernTemplate';
import PremiumTemplate from '../templates/PremiumTemplate';

type BiodataPreviewProps = {
  profile: BiodataProfile;
  template: TemplateOption;
};

const BiodataPreview: React.FC<BiodataPreviewProps> = ({ profile, template }) => {
  if (template === 'modern') {
    return <ModernTemplate profile={profile} />;
  }
  if (template === 'premium') {
    return <PremiumTemplate profile={profile} />;
  }
  return <TraditionalTemplate profile={profile} />;
};

export default BiodataPreview;
