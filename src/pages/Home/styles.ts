import styled from 'styled-components'
import { Colors } from '../../styles/theme'

export const S = {
  Home: styled.div`
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin: 100px auto;
    padding: 2rem;
    background: ${Colors.blue};
  `
}
