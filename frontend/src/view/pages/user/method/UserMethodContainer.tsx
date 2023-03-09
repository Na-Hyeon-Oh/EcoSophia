import UserMethodList from './methodList/UserMethodList';
import AddMethodForm from './addMethod/AddMethodForm';

import styles from './userMethod.module.css';

const UserMethodContainer = ({}: UserMethodContainerProps) => {
    return (
        <div className={styles.user_method_container}>
            <div className={styles.user_method_list_container}>
                <div className = {styles.user_method_list_title_container}>
                    내 결제수단
                </div>
                <UserMethodList></UserMethodList>
            </div>
            <div className={styles.user_method_add_form_container}>
                <AddMethodForm></AddMethodForm>
            </div>
        </div>
    );
}

interface UserMethodContainerProps {

}

export default UserMethodContainer