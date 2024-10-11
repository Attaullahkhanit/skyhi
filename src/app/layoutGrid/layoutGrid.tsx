import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  padding: 0 20px; /* Mobile padding: less padding */
  position: relative;

  margin: 0 auto; /* Center the container */
  box-sizing: border-box;
`;


export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px; /* Negative margin for offsetting column padding */
  margin-left: -15px;  /* Negative margin for offsetting column padding */

  /* Optional: To control vertical alignment */
  align-items: flex-start; /* Align items at the start */
`;


// Row: Flex container for grid layout
export const Col = styled.div<{
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}>`
  padding-right: 15px; /* Right padding */
  padding-left: 15px;  /* Left padding */

  // Default column size (mobile-first)
  flex: 0 0 100%; /* Full width on mobile */
  max-width: 100%; /* Full width on mobile */

  // Small screens (≥576px)
  ${(props) =>
    props.sm &&
    `
    @media (min-width: 576px) {
      flex: 0 0 ${(props.sm / 12) * 100}%;
      max-width: ${(props.sm / 12) * 100}%;
    }
  `}

  // Medium screens (≥768px)
  ${(props) =>
    props.md &&
    `
    @media (min-width: 768px) {
      flex: 0 0 ${(props.md / 12) * 100}%;
      max-width: ${(props.md / 12) * 100}%;
    }
  `}

  // Large screens (≥992px)
  ${(props) =>
    props.lg &&
    `
    @media (min-width: 992px) {
      flex: 0 0 ${(props.lg / 12) * 100}%;
      max-width: ${(props.lg / 12) * 100}%;
    }
  `}

  // Extra-large screens (≥1200px)
  ${(props) =>
    props.xl &&
    `
    @media (min-width: 1200px) {
      flex: 0 0 ${(props.xl / 12) * 100}%;
      max-width: ${(props.xl / 12) * 100}%;
    }
  `}
`;

