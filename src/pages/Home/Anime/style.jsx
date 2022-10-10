import styled from "styled-components"
export const Container = styled.div`
 h1{
    text-align: start;
    padding: 2rem;
 }
`
export const AnimeList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;
`
export const Anime = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white ;
    img{
        width: 200px;
        margin-bottom: 2rem;
        border-radius: 5px;
        padding: 1rem;

    }
    span{
        font-weight: bold;
        font-size:120%; 
        text-align: center;
        color: #224455;
        padding: 1%;
        
    }
    
    img:hover{
        transform: scale(1.1);
    }
    img{
        transition: all 0.5s;
    }
    
`

