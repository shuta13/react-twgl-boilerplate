import React, { useCallback, useContext } from 'react';
import HistoryContext from '../../contexts/HistoryContext';

export const Link: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = (
  props
) => {
  const { href } = props;
  const history = useContext(HistoryContext);
  const handleOnClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      href && history?.push(href);
    },
    [history, href]
  );

  return <a onClick={handleOnClick} {...props} />;
};
