import {DataGrid} from '../component/DataGrid'
import {connect} from "react-redux";
import {getAllUsers, addUser} from "../../store/gridActions";

const mapStateToProps = state => ({
    users: state.users
});

const mapDispatchToProps = {
    getAllUsers,
    addUser
}

export default connect(mapStateToProps, mapDispatchToProps)(DataGrid);
