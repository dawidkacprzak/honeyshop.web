interface IProps {
    title: string,
    children?: React.ReactNode,
    centerTitle?: boolean,
    bgColor?: string
}

const TitledSection = ({title, children ,centerTitle, bgColor} : IProps) => {
    return <div className={`p-[25px] w-mobilewidth flex flex-col 
                            2xl:w-2xlwidth xl:w-xlwidth lg:w-lgwidth h-fit lg:rounded-2xl mt-[35px] xl:mt-[50px] ${bgColor != null ? `bg-${bgColor}` : "bg-white"} `}>
        <p className={`font-bold text-[17px] mb-[30px] ${centerTitle == true ? "text-center" : ""}`}>{title}</p>
        {children}
    </div>
}

export default TitledSection;