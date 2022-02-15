
import { TailSpin } from 'react-loader-spinner';
import styled from 'styled-components';

export const ProductPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
    align-items: center;
    justify-content: center;
`

export const ProductListWrap = styled.div`
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
`

export const ProductListTitle = styled.h1`
    font-size: 4rem;
    color: #803440;
`

export const LoadingIndicator = styled(TailSpin).attrs({
    color: "#803440",
})`
    flex: 1;
`
