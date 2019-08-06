import { compose, defaultProps } from 'recompose';

import ProfileSelectorComponent from './ProfileSelectorComponent';

const testProps = {
  activeProfileName: 'Company Inc',
  activeProfileCountry: 'US',
  availableProfiles: [
    {
      name: 'ABC INC',
      country: 'CA',
    },
    {
      name: 'Freaking long COMPANY NIC',
      country: 'MX',
    },
  ],
  handleSelectProfile: profile => console.log('selected new profile', profile),
};


export default compose(defaultProps(testProps))(ProfileSelectorComponent);
