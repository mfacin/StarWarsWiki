import React from 'react'
import { useDataStore } from '../../services/stores'

import { ScreenScrollContainer, Hero, GoBack } from '../../components'

const Detail = () => {
  const { selectedData } = useDataStore()

  return (
    <ScreenScrollContainer>
      <Hero item={selectedData} onDetail />
      <GoBack />
    </ScreenScrollContainer>
  )
}

export { Detail }
