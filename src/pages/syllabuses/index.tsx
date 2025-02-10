import axios from "axios"
import clsx from "clsx"
import {FC, useEffect, useState} from "react"

import {Loading} from "@/components/loading"
import {dataContent} from "@/pages/syllabuses/lib/dataContent.tsx"
import {PageItem} from "../../components/page-item"
import {PageLayout} from "../../layouts"

import styles from "./index.module.scss"
import {getDataFromGoogleSheets} from "@/utils/getDataFromGoogleSheets"

interface ISyllabuses {}

export const Syllabuses: FC<ISyllabuses> = () => {
  const [data, setData] = useState([])
  const [isLoading, srtLoading] = useState<boolean>(true)

  useEffect(() => {
    getDataFromGoogleSheets("Предмети", (data: any) => {
      setData(data)
      srtLoading(false)
    })
  }, [])

  return (
    <PageLayout title="Предмети">
      {dataContent.map((e, i) => (
        <PageItem {...e} key={i} />
      ))}
    </PageLayout>
  )
}
