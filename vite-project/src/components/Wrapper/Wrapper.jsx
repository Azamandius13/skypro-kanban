import { WrapperCont } from "./Wrapper.styled";

function Wrapper({ children }) {
  return (
      <WrapperCont>
        {/* pop-up start*/}
        {/* pop-up end*/}
        {children}
      </WrapperCont>
  );
}

export default Wrapper;