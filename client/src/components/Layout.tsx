import Content from "../application-layout/Content"
import Navbar from "../application-layout/Navbar"
import CreateFeed from "./CreateFeed"

export default function Layout(props) : any{
    return (
    <>
        <Navbar />
        <Content content={props.content}>
        </Content>
    </>
    )
}