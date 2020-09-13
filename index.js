import styled from "styled-components";

console.log(styled.default.div`
color: red;
:hover {
    color: blue;
}
&:hover {
    color: yellow;
}
`);
