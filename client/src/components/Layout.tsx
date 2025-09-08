import Content from "../application-layout/Content"
import Navbar from "../application-layout/Navbar"
import CreateFeed from "./CreateFeed"

export default function Layout(){
    return (
    <>
        <Navbar />
        <Content content={<CreateFeed/>}>
        </Content>
    </>
    )
}