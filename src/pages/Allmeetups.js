import MeetupsList from "../components/meetups/MeetupsList";


const DummyData =[
    {
        id: 'm1',
        title:'Hasta Lavista Party',
        image:'https://cdn.pixabay.com/photo/2015/03/08/17/25/musician-664432_960_720.jpg',
        address:'325 Avenue, Miami',
        description:'You cannnot afford to miss this classic event bro'
    },
    {
        id: 'm2',
        title:'Red House Pool Party',
        image:'https://cdn.pixabay.com/photo/2018/06/17/10/38/artist-3480274_960_720.jpg',
        address:'Kokomlele, opposite Drug store',
        description:'This party is for Rich men, if you are broke, stay home'
    },
    {
        id: 'm3',
        title:'Salah Jams',
        image:'https://cdn.pixabay.com/photo/2017/08/03/21/48/drinks-2578446_960_720.jpg',
        address:'Fadama Junction',
        description:'This is one hell of a killa party'
    }
]

function AllMeetUpsPage(){
    return (
        <section>
        <h1>All Meetups</h1>
       <MeetupsList meetups={DummyData}/>
    </section>
    );
}

export default AllMeetUpsPage;