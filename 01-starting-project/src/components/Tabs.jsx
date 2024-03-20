export default function Tabs(props){
    let ButtonContainer =props.buttonContainer;
    return(
        <>
            <ButtonContainer>
            {props.buttons}
            </ButtonContainer>
            {props.children}
        </>
    );
}