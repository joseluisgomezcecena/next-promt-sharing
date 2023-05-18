import React from "react";
import Link from "next/link";

import moment from "moment/moment";

const JobItem = ({job}) => {
    return (
        <Link href={`/job/${job.id}`}>
            <div className="job-listing">
                <div className="job-listing-details">
                    <div className="job-listing-description">
                        <h4 className="job-listing-company">{job.company}</h4>
                        <h3 className="job-listing-title">{job.title}</h3>
                        <p className="job-listing-text">
                            {job.description.substring(0, 100)}...
                        </p>
                    </div>

                    <span className="bookmark-icon"></span>
                </div>

                <div className="job-listing-footer">
                    <ul>
                        <li>
                            <i aria-hidden className="fas fa-industry"></i> {job.industry}
                        </li>

                        <li>
                            <i aria-hidden className="fas fa-briefcase"></i> {job.type}
                        </li>
                        <li>
                            <i aria-hidden className="fas fa-money-check-alt"></i>${job.salary}
                        </li>
                        <li>
                            <i aria-hidden className="far fa-clock"></i> {moment.utc(job.created_at).local().startOf('seconds').fromNow()}

                        </li>
                    </ul>
                </div>
            </div>
        </Link>
    );
};

export default JobItem;
