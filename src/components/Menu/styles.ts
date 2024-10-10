import styled, {keyframes} from "styled-components";

const TRIANGLE = '4px';
const theme = {
    green: "#45ed66",
    lavender: '#cca1fa',
    white: "#fff",
    black: '#000',
};

const slideTooltip = keyframes`
    100% {
        visibility: visible;
        transform: translateY(40%);
    }
`;

export const ListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    align-items: center;
    color: ${theme.lavender};
`;

export const BtnIcon = styled.button<{ scale?: number }>`
    background-color: transparent;
    color: inherit;
    border: none;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    padding: 0 clamp(8px, 8px, 16px);
    transition: transform 0.2s ease-in-out;

    svg {
        font-size: 24px;
    }

    &:has(+ button + button:focus-visible),
    &:has(+ button + button:hover) {
        transform: scale(1.15);
    }

    &:has(+ button:focus-visible),
    &:has(+ button:hover) {
        transform: scale(1.45);
    }

    &:focus-visible, &:hover {
        transform: scale(2);
        color: ${theme.green};
    }

    &:focus-visible > .tooltip,
    &:hover > .tooltip {
        animation: ${slideTooltip} 0.4s forwards ease-in-out; animation-delay: 0.35s;
    }

    &:focus-visible + button,
    &:hover + button {
        transform: scale(1.45);
    }

    &:focus-visible + button + button,
    &:hover + button + button {
        transform: scale(1.15);
    }
`;

export const TooltipBox = styled.div`
    visibility: hidden;
    position: absolute;
    top: 100%;
    left: 50%;
    translate: -50% 0;
    font-size: 6px;
    font-weight: bold;
    border-radius: 8px;
    padding: 2px 8px;
    background-color: ${theme.green};
    color: ${theme.black};

    &::before {
        content: '';
        width: 0;
        height: 0;
        border-left: ${TRIANGLE} solid transparent;
        border-right: ${TRIANGLE} solid transparent;
        border-bottom: ${TRIANGLE} solid ${theme.green};
        position: absolute;
        top: -3px;
        left: 50%;
        translate: -50% 0;
    }
`;