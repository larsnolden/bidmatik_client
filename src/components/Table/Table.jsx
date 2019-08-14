import React from 'react';
import styled from '@emotion/styled';
import propTypes from 'prop-types';

import Hint from 'components/Hint';
import Chevron from 'components/Chevron';
import filterIconPath from 'assets/icons/filter.svg';
import sortIconPath from 'assets/icons/sort.svg';


const Container = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
`;

const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  padding: 24px;
`;

const HeadingHint = styled(Hint)`
  padding-left: 5px;
`;

const Heading = styled.div`
  font-weight: 500;
  font-size: 26px;
  line-height: 20px;
  letter-spacing: 0.025em;
  text-transform: uppercase;
  color: #627D98;
`;

const ColumnsRow = styled.div`
  padding-left: 24px;
  display: flex;
  flex-direction: row;
  height: 45px;
  align-items: center;
  border-bottom: 1px solid #BCCCDC;
`;

const ColumnHeadings = styled.div`
  margin-left: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-basis: 100%;
  user-select: none;
`;

const ColumnHeading = styled.div`
  text-transform: uppercase;
  color: #829AB1;
  font-weight: 500;
  font-size: 13px;
  line-height: 12px;
`;

const FilterButton = styled.img`
  width: 11px;
  height: 8px;
  cursor: pointer;
`;

const SortButton = styled.img`
  width: 8px;
  height: 10px;
  margin-left: 2px;
`;

const ColumnHeadingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 20%;
  cursor: pointer;
  align-items: flex-end;
`;

const NameHeadingWrapper = styled(ColumnHeadingWrapper)`
  flex-basis: 300px;
`;

const Footer = styled.div`
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  border-top: 1px solid #BCCCDC;
  user-select: none;
`;

const NextPageButton = styled.div`
  font-size: 14px;
  color: #186FAF;
  cursor: pointer;
  padding-right: 24px;
  font-weight: 500;
`;

const NextPageChevron = styled(Chevron)`
  transform: rotate(-90deg);
  margin-left: 2px;
`;

const ViewColumnSpacing = styled(ColumnHeadingWrapper)`
  flex-basis: 50px;
  padding-right: 33px;
`;

const Table = ({
  title,
  columns,
  handleSortChange,
  // handleFilterChange,
  handleNextPageClick,
  children,
}) => (
  <Container>
    <HeadingWrapper>
      <Heading>
        {title}
      </Heading>
      <HeadingHint message="This HTML file is a template.If you open it directly in the browser, you will see an empty page.You can add webfonts, meta tags, or analytics to this file.The build step will place the bundled scripts into the <body> tag.To begin the development, run `npm start` or `yarn start`.To create a production bundle, use `npm run build` or `yarn build`." />
    </HeadingWrapper>
    <ColumnsRow>
      <FilterButton src={filterIconPath} />
      <ColumnHeadings>

        <NameHeadingWrapper onClick={() => handleSortChange('Name')}>
          <ColumnHeading>
            Name
          </ColumnHeading>
          <SortButton src={sortIconPath} />
        </NameHeadingWrapper>

        {
          columns.map(column => (
            <ColumnHeadingWrapper onClick={() => handleSortChange(column)}>
              <ColumnHeading>
                {column}
              </ColumnHeading>
              <SortButton src={sortIconPath} />
            </ColumnHeadingWrapper>
          ))
        }
        <ViewColumnSpacing />
      </ColumnHeadings>
    </ColumnsRow>
    {children}
    <Footer>
      <NextPageButton onClick={handleNextPageClick}>
        next
        <NextPageChevron
          color="#186FAF"
          width={9}
          height={9}
        />
      </NextPageButton>
    </Footer>
  </Container>
);

export default Table;

Table.defaultProps = {
  title: '',
  columns: [''],
  handleSortChange: () => {},
  // handleFilterChange: () => {},
  handleNextPageClick: () => {},
};

Table.propTypes = {
  title: propTypes.string,
  columns: propTypes.arrayOf(propTypes.string),
  handleSortChange: propTypes.func,
  // handleFilterChange: propTypes.func,
  handleNextPageClick: propTypes.func,
  children: propTypes.func.isRequired,
};
