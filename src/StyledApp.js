import styled from 'styled-components';

export const Container = styled.div`
  font: 0.9rem sans-serif;
  background: #0a1f44;
  color: #1e2432;
  height: 100%;
  margin: 0;
`;

export const MainContainer = styled.div`
  background: linear-gradient(
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.418)
  ), url('https://hdwallpaper20.com/wp-content/uploads/2017/07/wallpaper-wp4001752.jpg');
  background-size: cover;
  background-position: center;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SearchInput = styled.input`
  outline: none;
  padding: 20px 7%;
  border-radius: 20px;
  border: none;
  margin-bottom: 5%;
  background: rgba(250, 250, 250, 0.85);
`;

export const CityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px 8%;
  border-radius: 20px;
  background: rgba(250, 250, 250, 0.85);
  box-shadow: 10px 10px 5px 0px rgba(15, 15, 15, 0.404);
`;

export const Description = styled.p`
  margin-top: 10px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const Temperature = styled.div`
  font-size: 5rem;
  font-weight: bold;
  margin-top: 10px;
  color: #1e2432;
  text-align: center;
`;



export const TemperatureSup = styled.sup`
  font-size: 0.5em;
`;

export const CityName = styled.h2`
  font-size: 2em;
`;

export const CountrySup = styled.sup`
  padding: 0.2em 0.6em;
  margin-left: 0.2em;
  border-radius: 30px;
  color: #fff;
  background: #ff8c00;
`;

export const CityIcon = styled.img`
  margin-top: 10px;
  width: 100px;
  height: 100px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ResponsiveSearchInput = styled(SearchInput)`
  @media only screen and (max-width: 600px) {
    padding: 20px 15%;
  }
`;

export const ResponsiveCityContainer = styled(CityContainer)`
  @media only screen and (max-width: 600px) {
    padding: 40px 20%;
  }
`;
