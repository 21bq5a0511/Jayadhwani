import React, { useState } from "react";
import { motion } from "framer-motion";
import "./About.css";

function About() {
  const [selectedMember, setSelectedMember] = useState(null);


  return (
    <div className="about-page">
      {/* Title */}
      <motion.h1
        className="about-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Jayadhwani Church
      </motion.h1>

      <motion.p
        className="about-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
       Twelve years ago, God planted a vision in the heart of our beloved Pastor John Peter. With nothing more than faith, prayer, and a desire to serve the Lord, he stepped forward to establish Jayadhwani Ministry. What began as a small gathering of believers soon grew into a vibrant ministry that continues to impact lives even today.

From the very beginning, Pastor John Peter carried a strong burden to reach people with the love of Christ. He firmly believed that the Word of God has the power to transform lives, heal brokenness, and bring hope to those in despair. Jayadhwani was not simply started as another ministry, but as a calling from God to be a voice of encouragement, a beacon of light, and a dwelling place of worship.

Over the years, we have seen God’s hand move mightily. Many individuals and families who walked in with pain, struggles, or hopelessness found peace, healing, and restoration through prayer and fellowship here. Testimonies of changed lives have become the heartbeat of Jayadhwani. Young people discovered their true identity and purpose in Christ, marriages have been restored, and countless prayers have been answered. These stories are not just about the ministry—they are proof of God’s unfailing love and His desire to walk with His people.

Our pastor has always emphasized one thing: Jayadhwani is not about a person; it is about Christ alone. Every meeting, every worship session, and every gathering is centered around glorifying God and pointing people back to Jesus. The ministry stands as a living testimony that when we put God first, He leads us faithfully.

Twelve years is not just a number for us—it represents years of prayer, sacrifice, joy, tears, and above all, God’s faithfulness. Even in moments of challenge, the Lord never let us down. He strengthened Pastor John Peter and the church family to press on with the vision. Today, we can boldly say that Jayadhwani exists only because of His grace and mercy.

As we continue this journey, our heart remains the same: to spread the Word of God, to see lives transformed, and to be a vessel of His glory. We are grateful for every person who has been part of this journey—those who prayed with us, served with us, and stood with us in faith. Each one is a testimony of how God builds His kingdom through ordinary people with extraordinary faith.

Looking ahead, we believe the best is yet to come. Just as God led us faithfully for the past twelve years, we trust that He will carry us forward into even greater works for His glory. Jayadhwani is more than a ministry—it is a testimony of God’s faithfulness, love, and power that continues to echo in the hearts of all who come here.
      </motion.p>

      {/* Pastor Section */}
      <motion.section
        className="pastor-section"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="pastor-image">
          <img src="/images/pastor.jpg" alt="Pastor" className="pastor-img" />
        </div>
        <div className="pastor-info">
          <h2>Meet Our Pastor</h2>
          <p>
            Pastor <strong><bold>John Peter</bold></strong> has been faithfully
            leading Jayadhwani Ministries with a heart full of love, wisdom, and
            dedication. With a vision to bring people closer to Christ, our
            pastor inspires us through preaching, teaching, and serving the
            community.
          </p>
          <p>
            Under his guidance, the church has grown into a family where people
            of all ages are welcome to worship, learn, and fellowship together.
          </p>
        </div>
      </motion.section>

      {/* Team Section */}
      
              

      {/* Modal for Team Details */}
      {selectedMember && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedMember.img} alt={selectedMember.title} />
            <h2>{selectedMember.title}</h2>
            <p>{selectedMember.details}</p>
            <button
              className="close-btn"
              onClick={() => setSelectedMember(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
