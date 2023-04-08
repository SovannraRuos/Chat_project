import { PrettyChatWindow} from 'react-chat-engine-pretty'
const ChatsPage = (props) =>{
    return (
        <div style={{height: '100vh'}}>
            <PrettyChatWindow
                projectId="35362679-4375-4ee0-8792-658734b398ef"
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}
                />
        </div>
    )
}
export default ChatsPage;