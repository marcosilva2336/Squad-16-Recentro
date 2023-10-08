import styled from 'styled-components'


export const Container = styled.div`

display: flex;
justify-content: space-around;
align-items: center;
`

export const Box = styled.div`
    width: 320px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    margin: 16px;

    `
    
export const Content = styled.div`
    padding: 16px;
`
export const Imagem = styled.img`
width: 100%;
height: 250px;
object-fit: cover;
`

export const Title = styled.h2`
    margin-top: 0;
    margin-bottom: 8px;
`

export const Text = styled.p`
    margin: 0;
    color: #555;
`
    //     .card-content {
//       padding: 16px;
//     }

//     h2 {
//       margin-top: 0;
//       margin-bottom: 8px;
//     }

//     p {
//       margin: 0;
//       color: #555;
//     }

// export const Container = styled.div`
//     display: flex;
// `

//   <style>


//     .card {
//       width: 250px;
//       background-color: #fff;
//       border-radius: 8px;
//       box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//       overflow: hidden;
//       margin: 16px;
//     }

//     .card img {
//       width: 100%;
//       height: 150px;
//       object-fit: cover;
//     }

//     .card-content {
//       padding: 16px;
//     }

//     h2 {
//       margin-top: 0;
//       margin-bottom: 8px;
//     }

//     p {
//       margin: 0;
//       color: #555;
//     }
// </style>



// export const Container = styled.div`
//     display: grid;
//     background-color: red;
//     grid-template-columns: repeat(auto-fill, minmax(265px, 1fr));
//     gap: 2rem;
// `


// export const Box = styled.div`
// background: white;
// border-radius: 20px;
// transition: 0.3s;
// `

// export const Imagem = styled.div`
//     margin: 0;
//     padding: 0;
//     overflow: hidden;

//     img {
//         max-width: 100%;
//         height: auto;
//         border-radius: 20px 20px 0 0;
//     }
// `

// export const Title = styled.h3`
//     margin: 1rem 0;
//     color: #22447b;
// `

// export const Text = styled.p`    
//     font-size: 1rem;
//     line-height: 1.5rem;
//     color: #6b82a7;
//     margin: 0;
// `

// // .site-container {
// //     margin: 2rem auto;
// //     max-width: calc(100% - 80px);
// // }
// // .article-container {
// //     display: grid;
// //     grid-template-columns: repeat(auto-fill, minmax(265px, 1fr));
// //     gap: 2rem;
// // }
// // .article-image {
// //     margin: 0;
// //     padding: 0;
// //     overflow: hidden;
// // }
// // .article-image img {
// //     max-width: 100%;
// //     height: auto;
// //     border-radius: 20px 20px 0 0;
// // }
// // .article-card {
// //     background: white;
// //     border-radius: 20px;
// //     transition: 0.3s;
// // }
// // .article-card:hover {
// //     box-shadow: 0 4px 20px 0 rgba(34, 68, 123, 0.2);
// //     cursor: pointer;
// // }
// // .article-content {
// //     padding: 2rem;
// // }
// // .article-content .card-category {
// //     font-size: 0.875rem;
// //     text-transform: uppercase;
// //     letter-spacing: 0.1em;
// //     font-weight: 600;
// //     color: #6b82a7;
// //     display: block;
// //     text-decoration: none;
// // }
// // .article-content .card-title {
// //     margin: 1rem 0;
// //     color: #22447b;
// // }
// // .article-content .card-excerpt {
// //     font-size: 1rem;
// //     line-height: 1.5rem;
// //     color: #6b82a7;
// //     margin: 0;
// // }
// // @media screen and (min-width: 768px) {
// //     .site-container {
// //         max-width: 608px;
// //     }
// //     .article-card {
// //         display: grid;
// //         grid-template-rows: 220px 1fr;
// //     }
// // }
// // @media screen and (min-width: 1280px) {
// //     .site-container {
// //         max-width: 1156px;
// //     }
// // }