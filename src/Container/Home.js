import React, {Component} from 'react'
import NavBar from '../Components/NavBar'
import Shift from '../Components/Shift'
import Calendar from '../Components/Calendar'

class Home extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Calendar />
                <Shift />

            </div>
        )
    }
}

export default Home;