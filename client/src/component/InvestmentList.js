import React from "react"
import api from '../api/api'

const InvestmentList = ()=> {
    // Create state variables
    let [responseData, setResponseData] = React.useState('')
    let [responsePrice, setResponsePrice] = React.useState('')
    let [message, setMessage] = React.useState('')

    // fetches stock data based on parameters
    const fetchData = (e) => {
        e.preventDefault()

        api.getData()
        .then((response)=>{
            console.log(response)
            const queryResponse = [response.data.finance.result[0].quotes[0].symbol,` | `, response.data.finance.result[0].quotes[1].symbol, ` | `, response.data.finance.result[0].quotes[2].symbol, ` | `, response.data.finance.result[0].quotes[3].symbol, ` | `, response.data.finance.result[0].quotes[4].symbol, ` | `, response.data.finance.result[0].quotes[5].symbol];
            const responsePrice = [[`$`, response.data.finance.result[0].quotes[0].regularMarketPrice,` | $`,  response.data.finance.result[0].quotes[1].regularMarketPrice, ` | $`,  response.data.finance.result[0].quotes[2].regularMarketPrice, ` | $`, response.data.finance.result[0].quotes[3].regularMarketPrice, ` | $`, response.data.finance.result[0].quotes[4].regularMarketPrice, ` | $`, response.data.finance.result[0].quotes[5].regularMarketPrice]]
            console.log(queryResponse)
            console.log(responsePrice)
            setResponseData(queryResponse)
            setResponsePrice(responsePrice)
        })
        .catch((error) => {
            setMessage('Error')
            console.log(error)
        })
    }
    
    const url = `https://widgets.tc2000.com/ChartWidget.aspx?widgetid=202194&service=TCTEMPLATEWIDGET&sym=${responseData[0]}&tf=1DAY&zoomL=3&ID=1487782&w=400&h=300&showZ=True&showTF=True&showSym=False&bars=40`
    const url1 = `https://widgets.tc2000.com/ChartWidget.aspx?widgetid=202194&service=TCTEMPLATEWIDGET&sym=${responseData[2]}&tf=1DAY&zoomL=3&ID=1487782&w=400&h=300&showZ=True&showTF=True&showSym=False&bars=40`
    const url2 = `https://widgets.tc2000.com/ChartWidget.aspx?widgetid=202194&service=TCTEMPLATEWIDGET&sym=${responseData[4]}&tf=1DAY&zoomL=3&ID=1487782&w=400&h=300&showZ=True&showTF=True&showSym=False&bars=40`
    const url3 = `https://widgets.tc2000.com/ChartWidget.aspx?widgetid=202194&service=TCTEMPLATEWIDGET&sym=${responseData[6]}&tf=1DAY&zoomL=3&ID=1487782&w=400&h=300&showZ=True&showTF=True&showSym=False&bars=40`
    const url4 = `https://widgets.tc2000.com/ChartWidget.aspx?widgetid=202194&service=TCTEMPLATEWIDGET&sym=${responseData[8]}&tf=1DAY&zoomL=3&ID=1487782&w=400&h=300&showZ=True&showTF=True&showSym=False&bars=40`
    const url5 = `https://widgets.tc2000.com/ChartWidget.aspx?widgetid=202194&service=TCTEMPLATEWIDGET&sym=${responseData[10]}&tf=1DAY&zoomL=3&ID=1487782&w=400&h=300&showZ=True&showTF=True&showSym=False&bars=40`

    return (
        <div>
            <h2>View Trending Stocks</h2>

            <p>{message}</p>
            <h4 className="stocks">Symbol: {responseData}</h4>
            <h4 className="stocks">Price: {responsePrice}</h4>
            <h4 className="stocks">Charts:</h4><a className="charts" target="_blank" rel="noopener noreferrer" href={url} data-symbol={responseData} data-reactid="73"><iframe src={url} title="Stock Charts"></iframe>View Chart</a>
            <a className="charts" target="_blank" rel="noopener noreferrer" href={url1} data-symbol={responseData} data-reactid="73"><iframe src={url1} title="Stock Charts"></iframe>View Chart</a>
            <a className="charts" target="_blank" rel="noopener noreferrer" href={url2} data-symbol={responseData} data-reactid="73"><iframe src={url2} title="Stock Charts"></iframe>View Chart</a>
            <a className="charts" target="_blank" rel="noopener noreferrer" href={url3} data-symbol={responseData} data-reactid="73"><iframe src={url3} title="Stock Charts"></iframe>View Chart</a>
            <a className="charts" target="_blank" rel="noopener noreferrer" href={url4} data-symbol={responseData} data-reactid="73"><iframe src={url4} title="Stock Charts"></iframe>View Chart</a>
            <a onLoad={fetchData} className="charts" target="_blank" rel="noopener noreferrer" href={url5} data-symbol={responseData} data-reactid="73"><iframe src={url5} title="Stock Charts">View Chart</iframe></a>
            
        </div>
    )
}

export default InvestmentList