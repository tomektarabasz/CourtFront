import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ItemProps {}

const StyledItem = styled.div`
  color: pink;
`;

export function Item(props: ItemProps) {
  return (
    <StyledItem>
      <h1>Welcome to Item!</h1>
    </StyledItem>
  );
}

export default Item;
