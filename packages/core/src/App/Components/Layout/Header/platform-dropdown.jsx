import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { Icon } from '@deriv/components';
import { BinaryLink } from 'App/Components/Routes';
import routes from 'Constants/routes';
import 'Sass/app/_common/components/platform-dropdown.scss';

class PlatformDropdown extends React.PureComponent {
    handleClickOutside = event => {
        if (!event.target.closest('.platform-dropdown__list') && !event.target.closest('.platform-switcher')) {
            this.props.closeDrawer();
        }
    };

    componentWillMount() {
        window.addEventListener('popstate', this.props.closeDrawer);
        document.addEventListener('click', this.handleClickOutside);
    }

    componentWillUnmount() {
        window.removeEventListener('popstate', this.props.closeDrawer);
        document.removeEventListener('click', this.handleClickOutside);
    }

    render() {
        const { is_mobile, platform_config, closeDrawer } = this.props;

        const platform_dropdown = (
            <div
                className={classNames('platform-dropdown', {
                    'platform-dropdown--is-mobile': is_mobile,
                })}
            >
                <div className='platform-dropdown__list'>
                    {platform_config.map((platform, idx) => (
                        <BinaryLink
                            to={platform.link_to}
                            // This is here because in routes-config it needs to have children, but not in menu
                            exact={platform.link_to === routes.trade}
                            key={idx}
                            onClick={closeDrawer}
                            className={classNames('platform-dropdown__list-platform')}
                        >
                            <div className='platform-dropdown__list-platform-background' />
                            <Icon className='platform-dropdown__list-platform-icon' icon={platform.icon} size={32} />

                            <div className='platform-dropdown__list-platform-details'>
                                <p className='platform-dropdown__list-platform-title'>{platform.title}</p>
                                <p className='platform-dropdown__list-platform-description'>{platform.description}</p>
                            </div>
                        </BinaryLink>
                    ))}
                </div>
            </div>
        );

        if (is_mobile)
            return ReactDOM.createPortal(platform_dropdown, document.getElementById('mobile_platform_switcher'));
        return ReactDOM.createPortal(platform_dropdown, document.getElementById('deriv_app'));
    }
}

PlatformDropdown.propTypes = {
    platform_configs: PropTypes.array,
};

export { PlatformDropdown };
