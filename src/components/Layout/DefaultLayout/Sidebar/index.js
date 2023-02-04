import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

function SideBar() {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('wrapper')}>
            <h2>SideBar</h2>
        </div>
    );
}

export default SideBar;
