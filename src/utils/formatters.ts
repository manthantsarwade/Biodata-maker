import { BiodataProfile } from './types';

export const formatValue = (value?: string) => {
  if (!value || value.trim().length === 0) {
    return '—';
  }
  return value;
};

export const fullHeightRange = (profile: BiodataProfile) => {
  const min = profile.expectedHeightMin.trim();
  const max = profile.expectedHeightMax.trim();
  if (!min && !max) {
    return '—';
  }
  if (min && max) {
    return `${min} - ${max}`;
  }
  return min || max;
};
