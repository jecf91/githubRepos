import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 35px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Owner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    color: #7159c1;
    font-size: 14px;
  }

  img {
    margin-top: 24px;
    border-radius: 50%;
    height: 120px;
    width: 120px;
  }

  h1 {
    margin-top: 10px;
    font-size: 24px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssuesList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #7159c1;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 20px;
    }
  }

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid #eee;
  }

  div {
    flex: 1;
    margin-left: 15px;

    strong {
      font-size: 16px;

      a {
        text-decoration: none;
        color: #333;

        &:hover {
          color: #7159c1;
        }
      }

      span {
        margin-left: 10px;
        background: #eee;
        border-radius: 2px;
        font-size: 12px;
        font-weight: 600;
        height: 20px;
        padding: 3px 4px;
      }
    }

    p {
      margin-top: 5px;
      font-size: 12px;
      color: #999;
    }
  }
`;
