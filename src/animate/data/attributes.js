/**
 * Attributes
 */
const animationAttr = {
	animation: {
    type: 'string',
  },
  customClass: {
    type: 'string',
  },
  delay: {
    type: 'number',
    default: '10',
  },
  threshold: {
    type: 'number',
    default: '50',
  },
  hideEl: {
    type: 'boolean',
    default: false,
  },
};

export default animationAttr;
