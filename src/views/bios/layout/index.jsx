import styled from "@emotion/styled";

export const BioThumb = styled.div`
    background-image: url('../../assets/bio_${(props) => (props.bio)}.png');
    background-size: cover;
    border: 2px solid #fff;
    height: 200px;
    width: 200px;
    margin: 0;
`;

export const BioWrapper = styled.div`
    width: 100%;
    margin: 0 20px 20px 0;
    display: flex;
    width: 100%;
`;

export const BioContent = styled.div`
    width: 100%;
    margin: 0 20px 20px 0;
    flex: 1;
    text-align: left;
    padding: 0 0 0 20px;
`;


export const BioName = styled.div`
    display: block;
    vertical-align: top;
    font-weight: bold;
    padding: 0 0 10px 0;
`;

export const BioDescription = styled.div`
    display: block;
    vertical-align: top;
`;