import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 80px;
`

export const CityInformation = styled.div`
  width: fit-content;

  display: flex;
  justify-content: left;
  flex-direction: column;

  padding: 30px;

  border-radius: 5px;
  border: 1px solid var(--primaryColor);
  background-color: transparent;
`

export const CityName = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;

  gap: 5px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 8px;

    border-radius: 50%;
    background-color: var(--primaryColorTransparent);

    svg {
      fill: var(--primaryColor);
    }
  }
`

export const CityWeather = styled.div`
  height: fit-content;

  display: flex;
  justify-content: space-between;

  gap: 150px;

  margin-top: 20px;

  div {
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;
  }

  h2 {
    font-size: 40px;
    font-weight: 300;
    color: var(--secondTextColor);
  }

  p {
    font-weight: 300;
    color: var(--primaryColor);
  }

  #WeatherIconDiv {
    width: fit-content;
    height: auto;

    display: flex;
    align-items: center;
    justify-content: center;

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 12px;
      border-radius: 50%;
      background-color: var(--primaryColorTransparent);
    }

    svg {
      width: auto;
      height: 35px;

      fill: var(--primaryColor);
    }
  }
`
