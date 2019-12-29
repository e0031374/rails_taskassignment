
export const isDuplicateLabel = (allLabels) => (tagName) => allLabels.some(label => label.l_name.toLowerCase() === tagName.toLowerCase() );
