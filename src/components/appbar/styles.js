import styled from 'styled-components';

const AppBarLayout = styled.div`

`;

const AppBarStyles = styled.nav`
    box-shadow: 0 0 2px 1px ${props => props.shadow || "grey"};
    padding: 1rem;
`;

const AppBarItems = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const AppBarItemGroup = styled.li`

`;

const AppBarItem = styled.li`

`;

export {AppBarStyles, AppBarItem, AppBarItemGroup, AppBarItems, AppBarLayout}