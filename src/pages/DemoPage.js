import React from 'react'
import '../assets/styles/demo.css'
import logo649 from '../assets/images/img_lotto649.png'

export default class NotFoundPage extends React.Component {
  render () {
    return (
      <div id='wrapper' className='block-game-play block-my-ticket'>
        <div id='content'>
          <div id='block-banner'>
            <div className='container'>
              <h2 className='fadeInUp upcase animated'>The world's first licensed</h2>
              <h1 className='fadeInUp animated'>Blockchain Lottery</h1>
              <h3 className='fadeInUp animated'>ETHEREUM TECHNOLOY</h3>
            </div>
          </div>
          <div id='game-play'>
            <div className='container p-0 p-sm-0'>
              <div className='inner clearfix clear-background'>
                <div className='left border-radius-none border-radius-none-sm game-play-header'>
                  <div className='group'>
                    <div className='items' style={{ padding: '20px 0px', width: '55%' }}>
                      <img src={logo649} alt='' />
                    </div>
                    <div className='jackpot_group'>
                      <div className='items jackpot'>
                        <h5>1st Prize</h5>
                        <p className='eth-custom'>10,000
                          <span style={{ fontWeight: 300, fontSize: '18px' }}>QGT</span>
                        </p>
                        <p />
                        <p style={{ opacity: '0.6' }}>equivalent of £10,000 GBP</p>
                      </div>
                      <div className='items jackpot draw_time'>
                        <div className='draw_jackpot'>
                          <h5>Draw: 8</h5>
                          <span className='status selling'>Selling</span>
                        </div>
                        <div className='link'>
                          <a href='#' data-toggle='modal' data-target='#limit'>Limit my plays</a>
                          <a href='#' data-toggle='modal' data-target='#self'>Self Exclude</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='inner clearfix'>
                <div
                  className='left border-radius-none border-radius-none-sm'
                  style={{
                    marginTop: 20,
                    marginBottom: 20
                  }}
                >
                  <ul className='nav nav-tabs tab-gaming tab-type' id='tabs' role='tablist'>
                    <li className='nav-item'>
                      <a className='nav-link active show' href='#tab1' id='tab1-tab' data-toggle='tab' aria-expanded='true'>Standard</a>
                    </li>
                    <li className='nav-item'>
                      <a className='nav-link upcase' href='#tab2' id='tab2-tab' data-toggle='tab' aria-expanded='false'>PowerBuy</a>
                    </li>
                  </ul>
                  <div className='tab-content tab-content-gaming' id='tabs-content'>
                    <div className='tab-pane fade show active' id='tab1' role='tabpanel' aria-labelledby='tab1-tab'>
                      <a href='#' className='link-play'>What’s Standard Play ?</a>
                      <div className='tickets-number'>
                        <span>Tickets: </span>
                      </div>
                      <div className='settings'>
                        <a href='#' className='link-setting button button-hover button-mat'>
                          <i className='fa fa-random' />Random all
                        </a>
                        <a href='#' className='link-setting button button-hover button-mat'>
                          <i className='fa fa-trash' />Delete all
                        </a>
                        <a href='#' className='link-setting button button-hover button-mat' data-toggle='modal' data-target='#modalSettingFavorite'>
                          <i className='fa fa-star' />Favourite
                        </a>
                        <a href='#' className='link-setting button button-hover button-mat' data-toggle='modal' data-target='#modalSetting'>
                          <i className='fa fa-minus-circle' />Ignore
                        </a>
                      </div>
                      <div className='choose-ticket'>
                        <div className='number-ticket'>
                          <p>Ticket #1 </p>
                        </div>
                        <div className='all-number'>
                          <div className='accordion' id='accordion'>
                            <div className='card'>
                              <div id='collapse1-standard' className='collapse show' aria-labelledby='headingOne' data-parent='#accordion'>
                                <div className='card-body'>
                                  <div className='no-number'>
                                    <div className='item'>01</div>
                                    <div className='item'>02</div>
                                    <div className='item'>03</div>
                                    <div className='item'>04</div>
                                    <div className='item'>05</div>
                                    <div className='item'>06</div>
                                    <div className='item'>07</div>
                                    <div className='item'>08</div>
                                    <div className='item'>09</div>
                                    <div className='item'>10</div>
                                    <div className='item'>11</div>
                                    <div className='item'>12</div>
                                    <div className='item'>13</div>
                                    <div className='item'>14</div>
                                    <div className='item'>15</div>
                                    <div className='item'>16</div>
                                    <div className='item'>17</div>
                                    <div className='item'>18</div>
                                    <div className='item'>19</div>
                                    <div className='item'>20</div>
                                    <div className='item'>21</div>
                                    <div className='item'>22</div>
                                    <div className='item'>23</div>
                                    <div className='item'>24</div>
                                    <div className='item'>25</div>
                                    <div className='item'>26</div>
                                    <div className='item'>27</div>
                                    <div className='item'>28</div>
                                    <div className='item'>29</div>
                                    <div className='item'>30</div>
                                    <div className='item'>31</div>
                                    <div className='item'>32</div>
                                    <div className='item'>33</div>
                                    <div className='item'>34</div>
                                    <div className='item'>35</div>
                                    <div className='item'>36</div>
                                    <div className='item'>37</div>
                                    <div className='item'>38</div>
                                    <div className='item'>39</div>
                                    <div className='item'>40</div>
                                    <div className='item'>41</div>
                                    <div className='item'>42</div>
                                    <div className='item'>43</div>
                                    <div className='item'>44</div>
                                    <div className='item'>45</div>
                                    <div className='item'>46</div>
                                    <div className='item'>47</div>
                                    <div className='item'>48</div>
                                    <div className='item'>49</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='link-add-ticket'>
                    <a href='#' className='button button-mat button-hover upcase'>
                      <i className='fa fa-plus' />Add Tickets
                    </a>
                  </div>
                </div>
                <div
                  className='right background-right border-radius-none border-radius-none-sm section-payment-right'
                  style={{
                    marginBottom: 20
                  }}
                >
                  <div
                    style={{
                      padding: 10
                    }}
                  >
                    <p className='text-payment'>PAYMENT
                      <i className='fa fa-angle-down' />
                    </p>
                    <div
                      className='number-set clearfix'
                      style={{
                        height: 76
                      }}
                    >
                      <div className='text-left'>
                        <p>Price for 1 set of numbers at draw No.8:</p>
                      </div>
                      <div className='text-right'>
                        <p>1 QGT</p>
                        <p>(£1 GBP)</p>
                      </div>
                    </div>
                    <div className='tickets'>
                      <div className='grand-total'>
                        <div className='clearfix group'>
                          <div className='text-left'>
                            <p>Grand total</p>
                          </div>
                          <div className='text-right'>
                            <p className='text-total-eth'>0 QGT </p>
                            <p className='text-total-usd'>(£0 GBP)</p>
                          </div>
                        </div>
                        <div className='link-confirm'>
                          <div className='link-confirm'>
                            <a href='#' className='button button-mat button-disable button-hover'>
                              <div className='psuedo-text'>Confirm</div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
