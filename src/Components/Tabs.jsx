function Tabs({buttonsContainer,buttons,children}){
    const Wrapper=buttonsContainer
  return <section>
    <Wrapper>{buttons}</Wrapper>
    {children}
  </section>  
}
export default Tabs