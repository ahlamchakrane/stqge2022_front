import React from 'react'
import { CRow, CCol, CDropdown, CDropdownMenu, CDropdownItem, CDropdownToggle, CWidgetStatsA, CWidgetStatsD } from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cibFacebook, cibTwitter, cilAddressBook, cilArrowBottom, cilArrowTop, cilEnvelopeOpen, cilOptions, cilPeople } from '@coreui/icons'

// eslint-disable-next-line react/prop-types
const WidgetsDropdown = ({ demandes, patients, employes }) => {
  return (
    <CRow>
      <CCol xs={4}>
        <CWidgetStatsD className="mb-3" icon={<CIcon className="my-4 text-white" icon={cilAddressBook} height={52} />} style={{ '--cui-card-cap-bg': '#3C4B64' }} values={[{ title: 'Patients', value: patients }]} />
      </CCol>
      <CCol xs={4}>
        <CWidgetStatsD className="mb-3" icon={<CIcon className="my-4 text-white" icon={cilPeople} height={52} />} style={{ '--cui-card-cap-bg': '#3C4B64' }} values={[{ title: 'Employes', value: employes }]} />
      </CCol>
      <CCol xs={4}>
        <CWidgetStatsD className="mb-3" icon={<CIcon className="my-4 text-white" icon={cilEnvelopeOpen} height={52} />} style={{ '--cui-card-cap-bg': '#3C4B64' }} values={[{ title: 'Demandes', value: demandes }]} />
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
