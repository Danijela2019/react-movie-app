import styled from 'styled-components'

export const SearchBox = styled.div`
width: 30%;
background:transparent;
@media (max-width: 767px) {
    width:80%;
  }
`

export const SearchInput = styled.input`
  margin-top: .5rem;
  font-size: 17px;
  border: none;
  color:black;
  background:whitesmoke;
  cursor:pointer;
  border-radius:5px 0 0 5px ;
  border-right: none;
  height:30px;
  width:100%`

  export const SearchForm = styled.form`
  display:flex;
  justify-content:flex-end;
  align-items:center;
  `
    
  
export const SearchButton = styled.button`

text-align: center;
 cursor: pointer;
  margin-top: 0.5rem;
  margin-right: 16px;
  background: var(--color-primary);
  border: none;
  cursor: pointer;
  width:30px;
  height: 30px;
 border-radius: 0 5px 5px 0 ;
  border-right: none;
  `
  