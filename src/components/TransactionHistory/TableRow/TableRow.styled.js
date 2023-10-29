import styled from 'styled-components';

export const Type = styled.td`
  color: #848688;
  text-transform: capitalize;
  padding: 15px;
  border-right: 1px solid #e7e1e5;
`;

export const Amount = styled.td`
  color: #848688;
  padding: 15px;
  border-right: 1px solid #e7e1e5;
`;

export const Currency = styled.td`
  color: #848688;
`;

export const Row = styled.tr`
  background-color: #ffffff;
  text-align: center;
  transition: all 200ms ease;

  &:nth-child(even) {
    background-color: #ecf1f3;
  }

  &:hover {
    background: linear-gradient(to bottom, #f2f9fe 0%, #d6f0fd 100%);
    transform: scale(1.01);
  }
`;
