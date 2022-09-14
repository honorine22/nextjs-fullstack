import { getRoomDetails } from '../../redux/actions/roomActions'
import Layout from '../../components/Layout'
import RoomDetails from '../../components/room/RoomDetails'
import { wrapper } from '../../redux/store'

export default function Index() {
    return (
        <Layout>
            <RoomDetails title='Room Details' />
        </Layout>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ req, params, store }) => {
    await store.dispatch(getRoomDetails(req, params.id))
})