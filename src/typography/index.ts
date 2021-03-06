import { styled } from "../utils/Theme";

const Base = styled.span`
  ${({ theme }) => `${theme.importFontFamily};
  ${theme.useFontFamily};
  font-style: normal;
  font-weight: normal;
  line-height: 140.62%;
  letter-spacing: -0.01em;
  color: black;`}
`;

export const Title = styled(Base)`
  font-weight: bold;
  font-size: 44px;
`;

export const Subtitle = styled(Base)`
  font-size: 28px;
`;

export const H1 = styled(Base)`
  font-weight: 600;
  font-size: 40px;
`;

export const H2 = styled(Base)`
  font-size: 32px;
`;

export const H3 = styled(Base)`
  font-size: 20px;
  line-height: 125%;
`;

export const Label1 = styled(Base)`
  font-weight: 600;
  font-size: 22px;
`;

export const Label2 = styled(Base)`
  font-weight: 500;
  font-size: 16px;
`;

export const Spotlight = styled(Base)`
  font-weight: 600;
  font-size: 18px;
`;

export const BodyText = styled(Base)`
  font-size: 16px;
  line-height: 125%;
`;

export const Legend = styled(Base)`
  font-size: 14px;
`;
