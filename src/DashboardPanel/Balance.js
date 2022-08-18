import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styled from "styled-components";
function Balance() {
    return (
        <Section>
            <div className="sales">
                <div className="sales__details">
                    <div>
                        <h4>Balance</h4>
                    </div>
                    <div>
                        <h5>PAST 30 DAY</h5>
                    </div>
                </div>
                <div className="sales__graph">
                    <ResponsiveContainer width="100%" height="150%">

                        <BarChart
                            width={200}
                            height={300}
                            data={data}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="spent" stackId="a" fill="#14121F" />
                            <Bar dataKey="saved" stackId="a" fill="#E5E5F1" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </Section>
    )
}

export default Balance
const data = [
    {
        name: 'Jan',
        saved: 4000,
        spent: 2400,
        amt: 2400,
    },
    {
        name: 'Feb',
        saved: 3000,
        spent: 1398,
        amt: 2210,
    },
    {
        name: 'March',
        saved: 2000,
        spent: 9800,
        amt: 2290,
    },
    {
        name: 'April',
        saved: 2780,
        spent: 3908,
        amt: 2000,
    },
    {
        name: 'May',
        saved: 1890,
        spent: 4800,
        amt: 2181,
    },
    {
        name: 'June',
        saved: 2390,
        spent: 3800,
        amt: 2500,
    },
    {
        name: 'July',
        saved: 3490,
        spent: 4300,
        amt: 2100,
    },
    {
        name: 'August',
        saved: 2780,
        spent: 3908,
        amt: 2000,
    },
    {
        name: 'Sep',
        saved: 1890,
        spent: 4800,
        amt: 2181,
    },
    {
        name: 'Oct',
        saved: 2390,
        spent: 3800,
        amt: 2500,
    },
    {
        name: 'Nov',
        saved: 3490,
        spent: 4300,
        amt: 2100,
    },
    {
        name: 'Dec',
        saved: 1890,
        spent: 4800,
        amt: 2181,
    }


];
const Section = styled.section`
.sales{
    color: black;
    width: 100%;
    .sales__details {
        display: flex;
        justify-content: space-between;
        margin: 1rem 0;
        div{
            display: flex;
            gap: 1rem;
            h5{
                color: gray;
            }
        }
    }
    .sales__graph{
        height: 10rem;
        width: 100%;
        .recharts-default-tooltip {
            background-color: black !important;
            border-color: black !important;
            color: white !important;
        }
    }
}
`;